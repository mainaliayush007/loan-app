from typing import List
from fastapi import HTTPException
from fastapi import APIRouter
from service.LoanSummarizingService import summarizeLoan
import os

from model.BusinessDetailModel import BusinessDetailModel
import requests
import json

loanRouter=APIRouter(prefix="/api/v1/loan")

@loanRouter.get("/")
def default():
    return {
        "message":"Welcome to Loan App"
    }

@loanRouter.post("/request-balancesheet")
def requestBalanceSheet(businessDetail: BusinessDetailModel):
    if(businessDetail.AccountingProvider == 'Xero'):
        headers = {'content-type': 'application/json',
        "Access-Control-Allow-Origin": "*"}
        requestData={"registrationNumber":businessDetail.RegistrationNumber}
        if(os.getenv("XERO")) == None:
            balanceSheetData = requests.post("http://localhost:8001/api/v1/xero/get-balanceSheet/",data=json.dumps(requestData).encode('utf8'),headers=headers)
        else:
            balanceSheetData = requests.post("http://"+(os.getenv("XERO"))+":8001/api/v1/xero/get-balanceSheet/",data=json.dumps(requestData).encode('utf8'),headers=headers)
        return balanceSheetData.json()
    elif (businessDetail.AccountingProvider == 'MYOB'):
        headers = {'content-type': 'application/json',
        "Access-Control-Allow-Origin": "*"}
        requestData={"registrationNumber":businessDetail.RegistrationNumber}
        if(os.getenv("MYOB")) == None:
            balanceSheetData = requests.post("http://localhost:8002/api/v1/myob/get-balanceSheet/",data=json.dumps(requestData).encode('utf8'),headers=headers)
        else:
            balanceSheetData = requests.post("http://"+os.getenv("MYOB")+":8002/api/v1/myob/get-balanceSheet/",data=json.dumps(requestData).encode('utf8'),headers=headers)
        return balanceSheetData.json()
    else:
        raise HTTPException(status_code=404,detail='Data not found!')

@loanRouter.post("/request-outcome")
def requestOutcome(businessDetail: BusinessDetailModel,balanceSheet : List[dict]):
    summary = summarizeLoan(businessDetail, balanceSheet)  
    headers = {'content-type': 'application/json',
    "Access-Control-Allow-Origin": "*"}
    if(os.getenv("DE")) == None:
        result = requests.post("http://localhost:8003/api/v1/decision-engine/get-decision",data=json.dumps(summary).encode('utf8'),headers=headers)
    else:
        result = requests.post("http://"+os.getenv("DE")+":8003/api/v1/decision-engine/get-decision",data=json.dumps(summary).encode('utf8'),headers=headers)
    return{
        'Loan Amount':businessDetail.RequestedAmt,
        'Profit/Loss':summary["ProfitOrLoss"],
        'Average Asset Value':summary['AverageAssetsValue'],
        'Loan Percentage Approved':result.json()
    }
    
    
        



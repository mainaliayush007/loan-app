from fastapi import APIRouter

from dummyData.sheet import balance_sheet_data1


balanceSheetRouter=APIRouter(prefix="/api/v1/xero")

@balanceSheetRouter.get("/")
def default():
    return {
        "message":"Welcome to XERO"
    }
@balanceSheetRouter.post("/get-balanceSheet")
def requestLoan(data:dict):
    return {
        "registrationNumber":data["registrationNumber"],     
        "balance_sheet":sorted(balance_sheet_data1, key=lambda d:(d['year'],d['month']))  
       
    }
from typing import List
from model.BusinessDetailModel import BusinessDetailModel

def summarizeLoan(businessDetail: BusinessDetailModel,balanceSheet : List[dict]):
    summary = {
        "BusinessName":businessDetail.BusinessName,
        "EstablishedYear":businessDetail.EstablishedYear,
        "ProfitOrLoss":0,
        "AverageAssetsValue":0,
        "RequestedLoan":businessDetail.RequestedAmt
    }
    balanceSheet=sorted(balanceSheet, key=lambda d:(d['year'],d['month']),reverse=True)[:12]
    summary["ProfitOrLoss"]= sum(item['profitOrLoss'] for item in balanceSheet)
    summary["AverageAssetsValue"] = sum(item['assetsValue'] for item in balanceSheet) / 12
    
    return summary
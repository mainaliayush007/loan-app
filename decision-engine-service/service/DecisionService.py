
def getPreAssessment(requestedLoanAmount: float, profitLoss : float, avgAssetsValue : float ):
    if(avgAssetsValue>requestedLoanAmount):
        return 100
    elif(profitLoss>0):
        return 60
    else:
        return 20
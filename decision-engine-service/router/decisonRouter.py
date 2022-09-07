from fastapi import APIRouter
from service.DecisionService import getPreAssessment


decisionRouter=APIRouter(prefix="/api/v1/decision-engine")

@decisionRouter.get("/")
def default():
    return {
        "message":"Welcome to Decision Engine"
    }

@decisionRouter.post("/get-decision")
def getDecision(data:dict):
    preAssessmentValue = getPreAssessment(data["RequestedLoan"],data["ProfitOrLoss"],data["AverageAssetsValue"])
    return preAssessmentValue
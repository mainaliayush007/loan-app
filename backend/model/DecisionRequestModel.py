from pydantic import BaseModel

from model.BusinessDetailModel import BusinessDetailModel

class DecisionRequestModel(BaseModel):
    businessData : BusinessDetailModel

from pydantic import BaseModel

class BusinessDetailModel(BaseModel):
    RegistrationNumber : str = None
    BusinessName : str = None
    EstablishedYear : str = None
    AccountingProvider : str =None
    RequestedAmt: float =None
    LoanPeriodInMonths : int =None

import sys
import os
# To get into project root directory
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from service.DecisionService import getPreAssessment

def test_getPreAssessmentValue():
    assert getPreAssessment(10000,300,500) == 60

    assert getPreAssessment(33432,6523,100000) == 100

    assert getPreAssessment(500000,-6523,500) == 20
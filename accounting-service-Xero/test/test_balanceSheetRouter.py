import sys
import os
# To get into project root directory
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from main import app
from fastapi.testclient import TestClient
client = TestClient(app)

def test_default():
    response = client.get('/api/v1/xero')
    assert response.status_code == 200
    assert response.json()=={
        "message":"Welcome to XERO"
    }
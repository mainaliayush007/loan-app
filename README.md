# Loan Application
The Application is the solution of the problem listed in https://github.com/DemystData/code-kata
### Micro Services

This application comprises of 5 microservices
1. Backend (API Service)
2. Accounting Service for XERO (API Service)
3. Accounting Service for MYOB (API Service)
4. Decision Engine (API Service)
5. Frontend (GUI)

### Stack Description
#### 1. Backend
This Service is the main service that redirects the request to the other services and serves the frontend. 
**Techology Used** Python (FastAPI)
**Port** 8000

#### 2. Accounting Service for XERO
This is the simulation of Accounting service of XERO.
**Techology Used** Python (FastAPI)
**Port** 8001

#### 3. Accounting Service for MYOB
This is the simulation of Accounting service of MYOB.
**Techology Used** Python (FastAPI)
**Port** 8002

#### 4. Decision Engine
This is the simulation of the Decision Engine.
**Techology Used** Python (FastAPI)
**Port** 8003

#### 5. Frontend
This is the user facing interface of the application.
**Techology Used** ReactQuery
**Port** 8004

## Run the with docker
Navigate to the root directory of the project and run the following command
**Prerequisite** Docker
```bash
docker compose up -d
```

## Run locally
#### 1. Backend
**Prerequisite** python3 and pip
```bash
# Navigate to the backed directory
cd backend
python3 -m pip install --no-cache-dir --upgrade -r requirements.txt
python3 -m uvicorn main:app --port 8000 --reload
```

#### 2. Accounting Service for XERO
**Prerequisite** python3 and pip
```bash
# Navigate to the backed directory
cd accounting-service-Xero
python3 -m pip install --no-cache-dir --upgrade -r requirements.txt
python3 -m uvicorn main:app --port 8001 --reload
```

#### 3. Accounting Service for MYOB
**Prerequisite** python3 and pip
```bash
# Navigate to the backed directory
cd accounting-service-MYOB
python3 -m pip install --no-cache-dir --upgrade -r requirements.txt
python3 -m uvicorn main:app --port 8002 --reload
```

#### 4. Decision Engine
**Prerequisite** python3 and pip
```bash
# Navigate to the backed directory
cd decision-engine-service
python3 -m pip install --no-cache-dir --upgrade -r requirements.txt
python3 -m uvicorn main:app --port 8003 --reload
```

#### 5. Frontend
**Prerequisite** npm
```bash
# Navigate to the backed directory
cd frontend
npm install
npm run start
```
## Runing the test locally
**NOTE**: Packages python packages needs to be installed for each serivices by navigating to the service directory before running the test which can be installed by the command below
```bash
python3 -m pip install --no-cache-dir --upgrade -r requirements.txt
```
#### 1. Backend
**Prerequisite** python3
```bash
# Navigate to the backed directory
cd backend
python3 -m pytest
```

#### 2. Accounting Service for XERO
**Prerequisite** python3
```bash
# Navigate to the backed directory
cd accounting-service-Xero
python3 -m pytest
```

#### 3. Accounting Service for MYOB
**Prerequisite** python3
```bash
# Navigate to the backed directory
cd accounting-service-MYOB
python3 -m pytest
```

#### 4. Decision Engine
**Prerequisite** python3
```bash
# Navigate to the backed directory
cd decision-engine-service
python3 -m pytest
```






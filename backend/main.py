from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from core.settings.static import APP_VERSION,PORT
from router.loanRouter import loanRouter
import uvicorn

app=FastAPI(
    title="Loan Application APP",
    version=APP_VERSION,
   
)
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(loanRouter)
def main():
    uvicorn.run(
        app,
        host="0.0.0.0",
        port = PORT,
        forwarded_allow_ips="*",

    )
if __name__ == "__main__":
    main()
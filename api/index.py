from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routers import portfolio
from api.core.config import settings
import uvicorn

app = FastAPI(title=settings.PROJECT_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(portfolio.router, prefix="/api/portfolio", tags=["portfolio"])

# Vercel needs the 'app' object exposed here.
# It automatically picks it up from api/index.py

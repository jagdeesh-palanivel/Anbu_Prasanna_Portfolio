from fastapi import APIRouter
from api.data.portfolio_data import get_portfolio_data

router = APIRouter()

@router.get("/")
def read_portfolio():
    return get_portfolio_data()

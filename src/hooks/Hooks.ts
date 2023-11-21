import { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RooteState } from "../store/store";
import { useSelector, useDispatch} from "react-redux";


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelectore : TypedUseSelectorHook< RooteState > = useSelector
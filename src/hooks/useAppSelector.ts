import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../store/index.root";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

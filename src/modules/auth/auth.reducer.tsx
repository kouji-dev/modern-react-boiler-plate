import {IUserInfo} from "@models/user/user-info.model";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {Login} from "@models/auth/login.model";

type AuthState = {
    token?: string;
    userInfo?: IUserInfo;
    authenticated?: boolean;
}

const INITIAL_STATE: AuthState = {}

const authSlice = createSlice({
    name: 'auth',
    initialState:  INITIAL_STATE,
    reducers: {},
    extraReducers: builder => {

    }
})

const login = createAsyncThunk(
    'auth/login',
    async (payload: Login, {extra}) => {
        const {data: token} = await extra?.axios
    }
)
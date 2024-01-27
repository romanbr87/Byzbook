import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPost } from '../../api'
import { apiRouteList } from '../../utils/api-routes';

export const fetchPanelData = createAsyncThunk(`panelData/fetchData`, async () => {
    const response = await getPost (`/cnt`);
    return response;
});

const panelDataSlice = createSlice({
  name: 'panelData',
  initialState: { 
    businesses: 0, 
    businesstypes: 0,
    reports: 0,
    messages: 0,
    images: 0,
    comments: 0,
    status: '',
    error: undefined },
  reducers: {
    
    /*todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action) {
      const todo = state.find(todo => todo.id === action.payload)
      todo.completed = !todo.completed
    }*/

  },
  extraReducers: builder => { 
    builder.addCase (fetchPanelData.pending, (state) => {
        state.status = 'loading';
        state.error = undefined;
    })
    
    builder.addCase (fetchPanelData.rejected, (state, action) => {
        state.status = 'error'; //`error: ${JSON.stringify(action, null, 2)}`;
        state.error = action.error;
    })
  
    builder.addCase (fetchPanelData.fulfilled, (state, action) => {
        return {
          status: 'ready',
          error: undefined,
          ...action.payload
        }
    })

    }
});

export default panelDataSlice.reducer;

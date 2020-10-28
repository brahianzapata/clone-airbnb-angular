import { IBooking } from './IBooking.model';

export interface IBookingResponse{
    status: string;
    response: IBooking;
}
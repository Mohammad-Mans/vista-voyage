import React, { FC, createContext, useContext, useState } from "react";

type Room = {
  hotelName: string;
  roomNumber: number;
  roomType: string;
  roomPhotoUrl: string;
  checkInDate: string | null;
  checkOutDate: string | null;
  adults: number | null;
  children: number | null;
  totalCost: number;
};

type BookingsValues = {
  addBooking: (room: Room) => void;
  clearBooking: () => void;
  bookedRoom: Room | null;
};

const BookingsContext = createContext<BookingsValues>({
  addBooking: () => {},
  clearBooking: () => {},
  bookedRoom: null,
});

type BookingsProviderProps = {
  children: React.ReactNode;
};

export const BookingsProvider: FC<BookingsProviderProps> = ({ children }) => {
  const [bookedRoom, setBookedRoom] = useState<Room | null>(null);

  const addBooking = (room: Room) => {
    setBookedRoom(room);
  };

  const clearBooking = () => {
    setBookedRoom(null);
  };

  return (
    <BookingsContext.Provider value={{ addBooking, clearBooking, bookedRoom }}>
      {children}
    </BookingsContext.Provider>
  );
};

export const useBookings = () => {
  const { addBooking , clearBooking , bookedRoom } = useContext(BookingsContext);

  if (!addBooking || !clearBooking) {
    throw new Error("useBookings must be used within a BookingsProvider");
  }

  return {
    addBooking,
    clearBooking,
    bookedRoom,
  };
};

export default BookingsContext;

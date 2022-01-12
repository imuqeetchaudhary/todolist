import React from "react";

// Contexts For States

export const TodosContext = React.createContext();
export const NewTodosContext = React.createContext();
export const IsOpenContext = React.createContext();
export const SelectedTodoContext = React.createContext();

// Context For Handlers

export const HandleChangeContext = React.createContext();
export const HandleSubmitContext = React.createContext();
export const HandleDeleteClickContext = React.createContext();
export const HandleEditClickContext = React.createContext();
export const HandleEditChangeContext = React.createContext();
export const TogglePopupContext = React.createContext();

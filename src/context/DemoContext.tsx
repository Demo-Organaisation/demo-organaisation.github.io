import { createContext, useContext, useState } from "react";

export interface DemoAccount {
  username: string;
  useEmail: boolean;
  email: string;
}

export interface DemoEmotions {
  happiness: number;
  guilt: number;
  stress: number;
  energy: number;
}

export interface DemoBehavior {
  streaming: boolean;
  playingGames: boolean;
  sleeping: boolean;
  activeApp: string;
}

export interface DemoInventory {
  gems: number;
  items: string[];
}

export interface DemoSettings {
  theme: "light" | "dark" | "purple";
  notifications: boolean;
}

export interface DemoState {
  name: string;
  account: DemoAccount;
  emotions: DemoEmotions;
  behavior: DemoBehavior;
  inventory: DemoInventory;
  settings: DemoSettings;
}

const defaultDemo: DemoState = {
  name: "Demo",

  account: {
    username: "Demo",
    useEmail: false,
    email: "",
  },

  emotions: {
    happiness: 50,
    guilt: 0,
    stress: 10,
    energy: 80,
  },

  behavior: {
    streaming: false,
    playingGames: false,
    sleeping: false,
    activeApp: "Desktop",
  },

  inventory: {
    gems: 0,
    items: [],
  },

  settings: {
    theme: "purple",
    notifications: true,
  },
};

export const DemoContext = createContext<{
  demo: DemoState;
  setDemo: React.Dispatch<React.SetStateAction<DemoState>>;
} | null>(null);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [demo, setDemo] = useState(defaultDemo);

  return (
    <DemoContext.Provider value={{ demo, setDemo }}>
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  return useContext(DemoContext);
}

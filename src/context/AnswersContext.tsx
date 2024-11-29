import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AnswersContextType {
	answers: string[];
	budget: number;
	setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
	setBudget: React.Dispatch<React.SetStateAction<number>>;
}

const AnswersContext = createContext<AnswersContextType | undefined>(undefined);

export function AnswersProvider({ children }: { children: ReactNode }) {
	const [answers, setAnswers] = useState<string[]>([]);
	const [budget, setBudget] = useState<number>(50);

	return (
		<AnswersContext.Provider value={{ answers, budget, setAnswers, setBudget }}>
			{children}
		</AnswersContext.Provider>
	);
}

export const useAnswers = (): AnswersContextType => {
	const context = useContext(AnswersContext);
	if (!context) {
		throw new Error("useAnswers must be used within an AnswersProvider");
	}
	return context;
};

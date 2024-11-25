import type React from "react";
import { createContext, useContext, useState } from "react";

interface AnswersContextType {
	answers: string[];
	budget: number | null;
	setAnswers: (answers: string[]) => void;
	setBudget: (budget: number) => void;
}

const AnswersContext = createContext<AnswersContextType | undefined>(undefined);

export const AnswersProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [answers, setAnswers] = useState<string[]>([]);
	const [budget, setBudget] = useState<number | null>(null);

	return (
		<AnswersContext.Provider value={{ answers, budget, setAnswers, setBudget }}>
			{children}
		</AnswersContext.Provider>
	);
};

export const useAnswers = (): AnswersContextType => {
	const context = useContext(AnswersContext);
	if (!context) {
		throw new Error("useAnswers must be used within an AnswersProvider");
	}
	return context;
};

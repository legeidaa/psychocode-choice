import { QuestionStep } from "./QuestionStep";
import { ProsToDoStep } from "./ToDo/ProsToDoStep";
import { ProsWeigthToDoStep } from "./ToDo/ProsWeigthToDoStep";
import { ConsToDoStep } from "./ToDo/ConsToDoStep";
import { ConsWeigthToDoStep } from "./ToDo/ConsWeigthToDoStep";
import { ProsNotToDoStep } from "./NotToDo/ProsNotToDoStep";
import { ProsWeigthNotToDoStep } from "./NotToDo/ProsWeigthNotToDoStep";
import { ConsNotToDoStep } from "./NotToDo/ConsNotToDoStep";
import { ConsWeigthNotToDoStep } from "./NotToDo/ConsWeigthNotToDoStep";

export const steps = [
    <QuestionStep />,
    <ProsToDoStep />,
    <ProsWeigthToDoStep />,
    <ConsToDoStep />,
    <ConsWeigthToDoStep />,
    <ProsNotToDoStep />,
    <ProsWeigthNotToDoStep />,
    <ConsNotToDoStep />,
    <ConsWeigthNotToDoStep />,
];

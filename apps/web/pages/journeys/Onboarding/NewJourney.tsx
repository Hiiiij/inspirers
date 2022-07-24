import { JourneySteps } from "./Steps";
import { FirstStep, FirstStepGuide } from "./JourneyType";
import { SecondStep, SecondStepGuide } from "./JourneyInfo";
import { ThirdStep, ThirdStepGuide } from "./JourneyGoals";
import { FourthStep, FourthStepGuide } from "./CompleteOnboarding";
import {
    Flex,
    Text
} from "@chakra-ui/react";
import { JourneyOnboardingConsumer, JourneyOnboardingProvider } from "../../../providers/JourneyOnboardingProvider";

export const NewJourney = ({ user }) => {
    return (
        <JourneyOnboardingProvider>
            <JourneyOnboardingConsumer>
                {
                    value => (
                        <Flex width="100%" gap={4} height="100%">
                            <Flex width="10%">
                                <JourneySteps steps={value.steps} />
                            </Flex>
                            <Flex gap={4} width="35%">
                                {value.currentStep.id === 1 ? <FirstStepGuide user={user} guide={value.currentStep} /> : null}
                                {value.currentStep.id === 2 ? <SecondStepGuide user={user} guide={value.currentStep} /> : null}
                                {value.currentStep.id === 3 ? <ThirdStepGuide user={user} guide={value.currentStep} /> : null}
                                {value.currentStep.id === 4 ? <FourthStepGuide user={user} guide={value.currentStep} /> : null}
                            </Flex>
                            <Flex
                                direction="column"
                                width="45%"
                            >
                                <Flex>
                                    {value.currentStep.id === 1 ? <FirstStep user={user} /> : null}
                                    {value.currentStep.id === 2 ? <SecondStep user={user} /> : null}
                                    {value.currentStep.id === 3 ? <ThirdStep user={user} /> : null}
                                    {value.currentStep.id === 4 ? <FourthStep user={user} /> : null}
                                </Flex>

                            </Flex>
                        </Flex>
                    )
                }
            </JourneyOnboardingConsumer>
        </JourneyOnboardingProvider>
    );
}

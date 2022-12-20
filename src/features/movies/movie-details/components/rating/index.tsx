import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Heading, HStack, Box, Icon, Tooltip, Pressable } from "native-base";

interface RatingProps {
  grade?: number;
}

const Rating = ({ grade }: RatingProps) => {
  const hasGrade = typeof grade === "number";

  const [isOpenGradeTooltip, setIsOpenGradeTooltip] = useState(false);

  const stars = Array.from(Array(5).keys());

  return (
    <Box flexDirection="row">
      <Heading fontSize="md">Sua avaliação: </Heading>
      {hasGrade ? (
        <Tooltip label={`Nota: ${grade}`} isOpen={isOpenGradeTooltip}>
          <Pressable onPress={() => setIsOpenGradeTooltip(!isOpenGradeTooltip)}>
            <HStack mx="2.5" space="2">
              {stars.map((value) => {
                const normalizedValue = value + 1;

                if (grade < normalizedValue) {
                  if (grade + 0.5 > normalizedValue) {
                    return (
                      <Icon
                        key={value}
                        as={FontAwesome}
                        name="star-half-empty"
                        color="secondary.100"
                        size={5}
                      />
                    );
                  }

                  return (
                    <Icon
                      key={value}
                      as={FontAwesome}
                      name="star"
                      color="white"
                      size={5}
                    />
                  );
                }

                return (
                  <Icon
                    key={value}
                    as={FontAwesome}
                    name="star"
                    color="secondary.100"
                    size={5}
                  />
                );
              })}
            </HStack>
          </Pressable>
        </Tooltip>
      ) : (
        <Heading fontSize="md" italic>
          Não visto
        </Heading>
      )}
    </Box>
  );
};

export { Rating };

import React, { useState } from "react";
import {
  Box,
  Container,
  FlatList,
  Icon,
  Input,
  Modal,
  Pressable,
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { useGetSearchAll } from "./api/get-search-all";
import { useDebounce } from "usehooks-ts";
import { ResultCard } from "./components/result-card";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearchValue = useDebounce(searchValue, 2000);

  const { searchData, isLoading } = useGetSearchAll(
    debouncedSearchValue,
    isOpen
  );

  const results = searchData?.results.filter((result) =>
    ["tv", "movie"].includes(result.mediaType)
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} flex={1}>
      <SafeAreaView style={{ flex: 1, width: "100%", height: "100%" }}>
        <Box backgroundColor="background.100" flex={1} mb={3}>
          <Input
            onChangeText={(text) => setSearchValue(text)}
            placeholder="Pesquisar"
            height="68px"
            fontSize="lg"
            borderRadius={0}
            autoFocus
            InputRightElement={
              <Pressable ml="2" justifyContent="center" onPress={onClose}>
                <Icon as={FontAwesome} name="close" color="text.200" size={7} />
              </Pressable>
            }
            InputLeftElement={
              <Container ml="2" justifyContent="center">
                <Icon
                  as={FontAwesome}
                  name="search"
                  color="text.200"
                  size={5}
                />
              </Container>
            }
          />

          {debouncedSearchValue ? (
            isLoading && !results ? (
              <Box></Box>
            ) : (
              <FlatList
                data={results}
                renderItem={({ item: result }) => (
                  <ResultCard result={result} />
                )}
              />
            )
          ) : null}
        </Box>
      </SafeAreaView>
    </Modal>
  );
};

export { SearchModal };

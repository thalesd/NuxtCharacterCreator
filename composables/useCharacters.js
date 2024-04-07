import characters from "@/mockData/mockCharactersData.json";

export const useCharacters = () => {
    return {
        characters
    }
};

export const useCharacter = (id) => {
    return {
        character: characters.find(c => c.id === parseInt(id))
    }
};
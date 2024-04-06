import characters from "@/mockData/mockData.json";

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
import json
from pydantic import BaseModel, Field
from typing import List

class Character(BaseModel):
    name: str = Field(description="the full name of the character.")
    bio: str = Field(description="a 1-2 sentence description of the character.")

    def toJSON(self):
        return {"name": self.name, "bio": self.bio}

class RelationshipDescription(BaseModel):
    description: str = Field(description="The description of the relationship between the two characters.")
    is_significant: bool = Field(description="True if there is a significant relationship between the two characters. Otherwise False.")
    # other_character: str = Field(description="the full name of the character to which the given character has a relationship to")
    # description: str = Field(description="a 1 sentence description of the relationship between the characters")

class CharacterList(BaseModel):
    characters: List[Character]

class Relationship:
    character1: str
    character2: str
    description: str

    def __init__(self, character1, character2, description):
        self.character1 = character1
        self.character2 = character2
        self.description = description

    def toJSON(self):
        return {"character1": self.character1, "character2": self.character2, "description": self.description}

# class RelationshipList(BaseModel):
#     __root__: List[Relationship]
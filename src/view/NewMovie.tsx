import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { PostConexion } from "../dao/PostConexion";

export default function NewMovie() {

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [releaseYear, setReleaseYear] = useState("");

    function handleButtonPress(): void {
        PostConexion(new Movie(id, title, releaseYear));
    }

    return (
        <View>
             <TextInput
                placeholder="ID"
                value={id}
                onChangeText={setId}
            />
            <TextInput
               placeholder="title"
               value={title}
               onChangeText={setTitle}
           />
           <TextInput
              placeholder="Release Year"
              value={releaseYear}
              onChangeText={setReleaseYear}
          />
          <Button
            title="ENVIAR"
            onPress={() => handleButtonPress()}
        />
        </View>
    );

}
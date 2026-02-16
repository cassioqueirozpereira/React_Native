import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";

interface IMyButtonProps {
    // O ? deixa os * opcionais, sem o ? se torna obrigatório adicionar os * no MyButton(o MyButton é um componente?)
    order?: number;
    children?: React.ReactNode;
    onPress?: () => void;
}
export const MyButton = (props: IMyButtonProps) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View>
                {props.children}
            </View>
        </TouchableOpacity>
    );
}   
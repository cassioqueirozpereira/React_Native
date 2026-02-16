import { SafeAreaView } from "react-native-safe-area-context";
import { MyButton } from "./shared/components/MyButton";
import { Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
       <MyButton order={1} onPress={() => console.log('Teste')}>
        <Text>MyButton {1}</Text>
       </MyButton>
       <MyButton order={2} onPress={() => console.log('Teste')}>
        <Text>MyButton {2}</Text>
       </MyButton>
       <MyButton order={3} onPress={() => console.log('Teste')}>
        <Text>MyButton {3}</Text>
       </MyButton>
    </SafeAreaView>
  );
}







// // funções simples
// const teste = () => {

// }

// function teste1() {

// }

// // funções que retornam JSX
// const teste2 = () => {
//   return <View></View>
// }

// function teste3() {
//   return <View></View>
// }

// // Componentes React, porque começa com a letra maiúscula
// function Teste4() {
//   return <View></View>
// }

// const Teste5 = () => {
//   return <View></View>
// }

// // React hook
// function useTeste6() {
//   const[] = useState()
// }
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
export default function App() { const [count, setCount] = useState(0); return <View style={{flex:1, backgroundColor:'#eef4ff', alignItems:'center', justifyContent:'center', gap:24}}><Text style={{fontSize:28}}>Synthetic legacy app</Text><Text>Original source, imported unchanged</Text><Pressable accessibilityRole='button' onPress={() => setCount(count + 1)} style={{padding:20, backgroundColor:'#bfd5ff', borderRadius:12}}><Text>Test counter: {count}</Text></Pressable></View>; }

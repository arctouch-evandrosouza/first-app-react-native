import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';
import Option from '../../components/Option';
import sentencesDB from '../../db';
import { useState, useEffect } from 'react'

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Home() {

    //const [answer, setAnswer] = useState('');
    const [result, setResult] = useState('');
    const [sentence, setSentence] = useState('');
    const [sentences, setSentences] = useState(sentencesDB);
    const [options, setOptions] = useState([]);
    const [textClass, setTextClass] = useState('wrong');

    const startGame = () => {
        setResult('')
        let randNumber = randomNumber(0, (sentences.length - 1))
        setSentence(sentences[randNumber]);
        const selected = getOptions(sentences, sentences[randNumber])
        setOptions(selected)
    };

    const getOptions = (sentences, sentence) =>  {
        let options = [];

        const sentencesToGetOptions = sentences.filter(sentenceGet => sentenceGet.id !== sentence.id);
        const usedNumber = [];
        for (let index = 0; index < sentencesToGetOptions.length; index++) { 
            let random = randomNumber(0, sentencesToGetOptions.length - 1)
            console.log("🚀 ~ file: index.js:38 ~ getOptions ~ random:", random)

            if (!usedNumber || !usedNumber.includes(random)) {
                options.push(sentencesToGetOptions[random]);
                usedNumber.push(random);
            }
            if (options.length === 3) break
        }
        options.push(sentence);
        console.log("🚀 ~ file: index.js:47 ~ getOptions ~ options:", options)
        return options;

    }
    const checkAnwser = (id) => {
        if(sentence.id === id) {
            setResult('Correct Awnser')
            setTimeout(() => {
                const newSenteces = sentences.filter(sentence => sentence.id !== id)
                setSentences(newSenteces)
                let randNumber = randomNumber(0, (newSenteces.length - 1))
                setSentence(newSenteces[randNumber]);
                const selected = getOptions(newSenteces, newSenteces[randNumber])
                setOptions(selected)
                setResult('')
            }, 1500)

        } else if(sentence.id !== id) {
            setResult('Incorrect Awnser')
        }
    }
    
    useEffect(() => {
        startGame()
    } , [sentences])

  return (
    <View style={styles.container}>
      <Header startGame={startGame}/>
      <Text style={styles.text}>Select the correct word! {sentences.length} -</Text>
      <Text style={styles.word}>{sentence?.english}</Text>
        <View style={styles.options}>
        {options.map((option) => <Option key={option?.id} id={option?.id} text={option?.portuguese } checkAnwser={checkAnwser}/>)}
        </View>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    options: {
      padding: 20,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'space-around',
      alignItems: 'center',
      flexDirection: 'row'

    },
    text: {
        padding:10,
        fontSize:20
    },
    word: {
        padding:10,
        fontSize:30,
        fontWeight: 'bold'
    },
    result: {
        padding:10,
        fontSize:20,
        fontWeight: 'bold'
    }
});
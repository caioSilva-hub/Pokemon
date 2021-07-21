import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Main, ImgTop, Top, Logo, BlockPokemon, Content, Circle, Modal, BackType, Card, InfoPoke, Type, Name, Size, SizeContent, Bar, BarHp, Stats, BarAtk, BarDef, BarSpeed, TitleBaseStats, Fechar, StatsContent } from '../styles/stylesComponents'


const Home = () => {
  const [search, setSearch] = useState<any>();
  const [card, setCard] = useState<any>();
  const [details, setDetails] = useState<boolean>(false);

     
  const exit = () => {
    setDetails(false);
  }

  const modal = (id: number) => {
    setDetails(true);
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/${id}`,
      )
      .then((preview) => {
        setCard(preview.data);
        console.log(preview.data, "testePokemon");
      });
  };

  const tratarHeight = (height: any) => {    
    let firstHeight = height.toString().split('')[0]; 
    if (height.toString().length === 1) {
      let newHeight = `${firstHeight}0 CM`;
      return newHeight;
    } 
    else { 
      let lastHeight = height.toString().split('')[1];
      let newHeight = `${firstHeight}.${lastHeight} M`;
      return newHeight;
    }
  }

  const tratarWeight = (weight: any) => {    
    let firstWeight = weight.toString().split('')[0]; 
    let secondWeight = weight.toString().split('')[1]; 
    let thirdWeight = weight.toString().split('')[2]; 

    if (weight.toString().length === 1) {
      let newWeight = `${firstWeight} KG`;
      return newWeight;
    } 
  
    else if(weight.toString().length === 2) {       
      let newWeight = `${firstWeight}.${secondWeight} KG`;
      return newWeight;
    } 

    else if(weight.toString().length === 3) {       
      let newWeight = `${firstWeight}${secondWeight}.${thirdWeight} KG`;
      return newWeight;
    } 

    else { 
      let lastWeight = weight.toString().split('')[3]; 
      let newWeight = `${firstWeight}${secondWeight}${thirdWeight}.${lastWeight} KG`;
      return newWeight;
    } 
  }

  const colors = (typeColors: any) => {
    switch (typeColors)  {
      case 'fire': return '#b12327';
      case 'dragon': return '#ffae00';
      case 'bug': return '#bee3f3';
      case 'dark': return '#333333';
      case 'electric': return '#eed321';
      case 'fairy': return '#f9b4e0';
      case 'fighting': return '#d17d30';
      case 'flying': return '#d9dee0';
      case 'ghost': return '#660066';
      case 'grass': return '#669933';
      case 'ground': return '#9f6411';
      case 'ice': return '#bee3f3';
      case 'normal': return '#bfa38a';
      case 'poison': return '#ab00ba';
      case 'psychic': return '#d837e6';
      case 'rock': return '#797979';
      case 'steel': return '#999999';
      case 'water': return '#20afed';
    }
  };


  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`,
      )
      .then((preview) => {
        setSearch(preview.data.results);
        console.log(preview.data.results, "teste");
      });

  }, []);



  return (
    <>
      {search && (
        <Main>
          <Top><Logo src='images/logo-pokemon.png' /></Top>
          <ImgTop src='images/projeto-pokemon.jpg' />
          <Content>


            {search.map((pokemon: any, index: number) => {
              const imageUrl = `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`;
              const id = index + 1;

              return (
                <BlockPokemon
                  onClick={() => {
                    modal(id);
                  }}
                >
                  <Circle><img alt="pokemon" src={imageUrl} /></Circle>
                  <p>{pokemon.name}</p>
                </BlockPokemon>


              );
            })}

          </Content>
        </Main>
      )}

      {details && (
        <>
          {card && (
            <Modal>
              <Card>
                <BackType background= {colors(card.types[0].type.name)}>
                   <img alt="pokemon" src={`https://pokeres.bastionbot.org/images/pokemon/${card.id}.png`} />
                </BackType>
                <InfoPoke>
                  <Fechar onClick={exit}>X</Fechar>
                  <Name>{card.name}</Name>
                  {card.types.map((pokeTypes: any, index: number) => {     
       
                    return ( 
                      <>
                        <Type background= {colors(card.types[index].type.name)}>{pokeTypes.type.name}</Type>
                      </>
                    )
                  })}
                  <SizeContent>
                    
                    <Size>
                      <p className="valores">{tratarWeight(card.weight)}</p>
                      <p className="txt">Weigth</p>
                    </Size>
                    <Size>
                      <p className="valores">{tratarHeight(card.height)}</p>
                      <p className="txt">Height</p>
                    </Size>
                  </SizeContent>
                  <TitleBaseStats>Base Stats</TitleBaseStats>
                  <StatsContent>
                    <Stats>
                      <p className="title">HP</p>
                      <Bar><BarHp width= {`${card.stats[0]?.base_stat}px`}>{card.stats[0].base_stat}</BarHp></Bar>
                    </Stats>
                    <Stats>
                      <p className="title">ATK</p>
                      <Bar><BarAtk width= {`${card.stats[1].base_stat}px`}>{card.stats[1].base_stat}</BarAtk></Bar>
                    </Stats>
                    <Stats>
                      <p className="title">DEF</p>
                      <Bar><BarDef width= {`${card.stats[2].base_stat}px`}>{card.stats[2].base_stat}</BarDef></Bar>
                    </Stats>
                    <Stats>
                      <p className="title">SPEED</p>
                      <Bar><BarSpeed width= {`${card.stats[5].base_stat}px`}>{card.stats[5].base_stat}</BarSpeed></Bar>
                    </Stats>
                  </StatsContent>
                </InfoPoke>
              </Card>
            </Modal>
          )}
        </>
      )}
    </>

  );

};

export default Home;


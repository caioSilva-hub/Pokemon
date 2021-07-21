import styled from 'styled-components'

interface Props{
    background?: any;
    width?: any;
}

export const StatsContent = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (max-width: 500px){
    margin-bottom: 20px;
}

`;

export const Fechar = styled.div`
color: #FFF;
font-family: Arial;
font-weight: bold;
font-size: 22px;
cursor: pointer;
text-align: center;
background: black;
border-radius: 50%;
width: 30px;
height: 30px;
padding: 5px 5px 2px 5px;
position: absolute;
right: 0;

@media (max-width: 500px){
    top: -220px;
}

`;

export const Card = styled.div`
display: flex;

@media (max-width: 500px){
    flex-direction: column;
    width: 100%;
}
`;

export const TitleBaseStats = styled.p`
font-size: 20px;
`;

export const BarHp = styled.div <Props>`
background-color: #d43a49;
animation: hp-me-in 2s;
width: ${({ width }) => width ? width : '100px'};
height: 15px;
border-radius: 5px;

@keyframes hp-me-in {
    0% {
        width: 0px;
    }
    100% {
        width: ${({ width }) => width ? width : '100px'};
    }
  }

`;
 

export const BarSpeed = styled.div <Props>`
background-color: #378e3c;
animation: speed-me-in 2s;
width: ${({ width }) => width ? width : '100px'};
height: 15px;
border-radius: 5px;




@keyframes speed-me-in {
    0% {
        width: 0%;
    }
    100% {
        width: ${({ width }) => width ? width : '100px'};
    }
  }

`;
export const BarAtk = styled.div <Props>`
background-color: #fea529;
animation: atk-me-in 2s;
width: ${({ width }) => width ? width : '100px'};
height: 15px;
border-radius: 5px;

@keyframes atk-me-in {
    0% {
        width: 0%;
    }
    100% {
        width: ${({ width }) => width ? width : '100px'};
    }
  }

`;

export const BarDef = styled.div <Props>`
background-color: #0091eb;
animation: def-me-in 2s;
width: ${({ width }) => width ? width : '100px'};
height: 15px;
border-radius: 5px;

@keyframes def-me-in {
    0% {
        width: 0%;
    }
    100% {
        width: ${({ width }) => width ? width : '100px'};
    }
  }

`;

export const Stats = styled.div`
display: flex;
margin-bottom: 10px;

.title{
    margin: 0px 20px;
    width: 70px;
    text-align: left;
    color: #999;
}
`;

export const Bar = styled.div`
width: 180px;
height: 15px;
background-color: #fff;
border-radius: 5px;
margin-right: 20px;
`;

export const Size = styled.div`
margin-top: 20px;
    .valores{
        font-size:24px;
        margin-bottom:0px;
    }

    .txt{
        margin-top: 0px;
        color:#999999;
    }
`;

export const SizeContent = styled.div`
display:flex;
justify-content: space-evenly;
`;

export const Modal = styled.div`
    background-color: rgba(0,0,0,0.9);
    align-items: center;
    display: flex;
    flex-direction: column;
    background-attachment: fixed;
    min-height: 100vh;
    position: fixed;
    width: 100%;
    justify-content: center;
    
`;


export const BackType = styled.div <Props>`
    background-color: ${({ background }) => background ? background : '#fff'};
    width: 350px;
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10% 0 0 10%;

    @media (max-width: 800px){
        width: 250px;
    }

    @media (max-width: 500px){
        width: 100%;
        border-radius: 0 0 0 0;
        height: 220px;
    }

    img{
        width: 300px;
        background-image: url(images/pokebola.png);
        background-repeat: no-repeat;
        background-position: right bottom;
        
        @media (max-width: 500px){
            width: 180px;
            background-size: contain;            
        }
        
    }
`;

export const InfoPoke = styled.div`
    background: #2b292c;
    width: 431px;
    text-align: center;
    color: #fff;
    font-family: Arial;
    border-radius: 0 10% 10% 0;
    position: relative;

    @media (max-width: 800px){
        width: 400px;
    }

    @media (max-width: 500px){
        width: 100%;
        border-radius: 0 0 0 0;
    }
`;

export const Name = styled.p`
    margin-bottom: 25px;
    margin-top: 25px;
    font-size: 42px;
`;

export const Type = styled.span <Props>`
background-color: ${({ background }) => background ? background : '#fff'};
font-size: 18px;
border-radius: 13px;
padding: 5px 25px 5px 25px;
margin: 10px;
`;



export const Main = styled.div`
    background: #e6e6e6;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-attachment: fixed;
    min-height: 100vh;
    position: absolute;    
    
`;


export const Top = styled.div`
    background: #cc0000;
    height: 70px;
    width: 100%;

    @media (max-width: 500px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;


export const Logo = styled.img`
    margin-top: 10px;
    width:130px;
    margin-left:20px; 
    
    @media (max-width: 500px){
        margin-top: 0;
        margin-left: 0; 
    }

`;

export const Content = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 500px){
        margin-top: 20px;
    }
`;

export const Circle = styled.div`
    background: white;
    border-radius: 50%;
    width: 150px;
    height: 150px;
`;

export const BlockPokemon = styled.div`
    padding: 3%;
    padding-top: 2%;
    padding-bottom: 0px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: columm;
    -ms-flex-direction: columm;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
        img {
            height: 150px;
            :hover{
                transform: scale(1.2);        
            }
        }

        p {
            font-size: 22px;
            font-family: Arial;
            margin-top: 10px;
            width: 150px;
            text-align: center;
            border-bottom: 2px dotted #999;
        }

       
`;

export const ImgTop = styled.img`
width: 70%;

@media (max-width: 600px){
    display: none;
}
`;

export const Busca = styled.form`
    margin-top: 50px;
    display: flex;
        @media (max-width: 600px){
            margin-top: 40px;
        }
        input{
            height: 35px;
            border-radius: 10px 0px 0px 10px;
            width: 372px;
            padding-left: 10px;
            border: 2px solid #3267b1;
            background: white; 
            
            
            ::-webkit-input-placeholder {
                
                color: #3267b1;
            }

            @media (max-width: 600px){
                width: 233px;
            }

        }
`;

export const BtnBusca = styled.button`
    height: 41px;
    border-radius: 0px 5px 5px 0px;
    background: #3267b1;
    border: none;
    width: 40px;
    cursor: pointer;
    svg{
        font-size: 20px;
    }
    path{
        fill: white;        
    }
    
`;

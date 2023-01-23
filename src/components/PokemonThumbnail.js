import { useState } from "react";
import Description from './Description';
import styled from "styled-components";
import '../index.css'

function PokemonThumbnail({id,name,image,type,height,weight,stat1,stat2,stat3,stat4,stat5,stat6,bs1,bs2,bs3,bs4,bs5,bs6}){
    
    const Info = styled.button
    `
    background-color:rgba(0,0,0,0.185);
    color:rgb(22,22,22);
    padding:0.5rem;
    margin:5px 25px;
    margin-top:1rem;
    border:none;
    border-radius:0.2rem;
    cursor:pointer;
    `
    const Number = styled.div
    `
    border-radius:1rem;
    padding:0.2rem 0.4rem;
    background-color:rgba(255,255,255,0.3);
    `
    
    const Detail = styled.div
    `
    display:flex;
    flex-direction:column;
    width:100%;
    `

    const style = `thumb-container $type`
    const [show,setShow] = useState(false);

    return(
        <div className={style}>
                <Number>
                <small>#0{id}</small>
                </Number>
                
            <img src={image} alt={name} />
                <Detail>
                <h3>{name.toUpperCase() }</h3>
                <small>Type:  {type} </small>
                <Info className="pokeinfo" 
                        onClick={()=>setShow(!show)}>
                    {show===true?"Know Less...":"Know More...."}
                </Info>
                {show===true?
                    <Description
                        weightpok =  {weight}
                        heightpok =  {height}
                        pokstat1 = {stat1}
                        pokstat2 = {stat2}
                        pokstat3 = {stat3}
                        pokstat4 = {stat4}
                        pokstat5 = {stat5}
                        pokstat6 = {stat6}

                        posbs1 = {bs1}
                        posbs2 = {bs2}
                        posbs3 = {bs3}
                        posbs4 = {bs4}
                        posbs5 = {bs5}
                        posbs6 = {bs6}

                    /> : <></>
                }   
            </Detail>
        </div>
    )
}

export default PokemonThumbnail;
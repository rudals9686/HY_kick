import styled from "styled-components";
import logo from '../team_image/gaebal.jpg'
import arrow from "../../asset/right_arrow.png"
import teams from "../teams.json"
import { Link } from "react-router-dom";

const Ranktable = ({children}) => {
    const teamDatas = (children === "선봉리그" ? teams.sunbong : teams.gongde);

    return(
        <RankWrapper>
            <RankHeader>
                <span className="ranking">순위</span>                
                <span className="club">동아리</span>
                <span>경기수</span>
                <span>승점</span>
                <span>승</span>
                <span>무</span>
                <span>패</span>
            </RankHeader>         
            {teamDatas.map((teamData, index)=>(
                    <RankBody>
                        <span className="rank">{index+1}</span>
                        <span className="club">
                            <img
                            className="logo"
                            src={logo}
                                alt="logo"
                                width={30}
                                height={30}
                            />
                            <span>{teamData.name}</span>
                            <Link to="/team1" className="link">
                                <img
                                className="arrow"
                                src={arrow}
                                    alt="arrow"
                                    width={20}
                                    height={20}
                                />
                                <span>팀페이지</span>
                            </Link>
                        </span>
                        <span>{teamData.played}</span>
                        <span>{teamData.points}</span>
                        <span>{teamData.win}</span>
                        <span>{teamData.draw}</span>
                        <span>{teamData.lose}</span>
                    </RankBody>
            ))}
        </RankWrapper>
    );
}

export default Ranktable;

const RankWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    vertical-align: middle;
    color: navy;
    font-weight: 500;

    span{
        width: 5rem;
    }

    .rank{
        font-size: 2rem;
    }

    .club{
        display: flex;
        align-items: center;
        gap: 0.3rem;
        width: 15rem;
        text-align: start;
        height: auto;
    }
    @media (max-width: 600px) {
        font-size: 10px;
        span{
            width: 2.5rem;
        }
        .club{
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            width: 9rem;
            text-align: start;
            height: auto; 
        }
    }
`;

const RankHeader = styled.div`
    width: auto;
    height: 1rem;
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const RankBody = styled.div`
    width: auto;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1rem;
    border-top: 1px solid rgb(245, 242, 245);
    border-bottom: 1px solid rgb(245, 242, 245);
    padding: 0.5rem 0;
    .link{
        display: flex;
        align-items: flex-end;
        gap: 0.3rem;
        font-size: 0.6rem;
        font-weight:1000;
        color: lightgray;
    }
`;


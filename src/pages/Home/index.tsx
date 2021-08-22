import React from "react"
import HeaderContainer from "../../containers/Header/HeaderContainer";
import HomeLayout from "../../layouts/Home";
import DateIndicatorLayout from "../../layouts/Home/DateIndicator";
import DateIndicatorContainer from "../../containers/DateIndicator/DateIndicatorContainer";
import CalendarContainer from "../../containers/Calendar/CalendarContainer";
import CalendarLayout from "../../layouts/Home/Calendar";

const Home = () =>{
    return (
        <>
            <HeaderContainer/>
            <HomeLayout>
                <DateIndicatorLayout>
                    <DateIndicatorContainer/>
                </DateIndicatorLayout>
                <CalendarLayout>
                    <CalendarContainer/>
                </CalendarLayout>
            </HomeLayout>


        </>
    )
}

export default Home
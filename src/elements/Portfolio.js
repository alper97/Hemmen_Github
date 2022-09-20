import React from "react";
import Card from "../components/Cardt2";





function App() {
    return (
        <div className="my-12">
            <div>
                <section class="bg-gray-100  ">
                    <div class="container px-16 py-10 mx-auto">
                        <h5 className="w-full flex justify-center text-primarygray  text-2xl font-bold  md:text-3xl">Lorem ipsum dolor sit.</h5>
                        <div class="grid grid-cols-3 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-3 xl:grid-cols-4">
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
}

export default App;
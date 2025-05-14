"use client";

import { useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "../../components/ui/dialog";

type Animal = {
  name: string;
  image: string;
  description: string;
  role: string;
};
const animals = [
  {
    name: "Clownfish",
    image: "/clownfish.png",
    description:
      "Clownfish form mutualistic relationships with sea anemones. They protect each other from predators and parasites, contributing to reef health.",
    role:
      "Clownfish help maintain the balance of the reef ecosystem by keeping sea anemones clean and free from parasites."
  },
  {
    name: "Sea Turtle",
    image: "/seaturtle.png",
    description:
      "Sea turtles maintain healthy seagrass beds and coral reefs, provide habitat for other marine life, and help balance marine food webs.",
    role:
      "They control jellyfish populations and cycle nutrients in the seagrass ecosystem."
  },
  {
    name: "Jellyfish",
    image: "/jellyfish.png",
    description:
      "Jellyfish are both predators and prey, serving as food for sea turtles and other marine animals, while also consuming plankton.",
    role:
      "They regulate plankton populations and help support biodiversity by being part of the ocean food chain."
  },
  {
    name: "Coral",
    image: "/coral.png",
    description:
      "Corals build reefs that provide shelter, breeding grounds, and hunting grounds for countless marine species.",
    role:
      "They are the foundation of reef ecosystems and protect coastlines from erosion."
  },
  {
    name: "Shark",
    image: "/shark.png",
    description:
      "As apex predators, sharks keep prey populations in check and ensure species diversity by hunting the sick and weak.",
    role:
      "They maintain the balance in food chains and support healthy fish populations."
  },
  {
    name: "Octopus",
    image: "/octopus.png",
    description:
      "Octopuses are intelligent predators that help control crustacean and mollusk populations. They also serve as prey to larger animals.",
    role:
      "They aid in population control and are indicators of marine health."
  },
  {
    name: "Plankton",
    image: "/plankton.png",
    description:
      "Plankton are tiny organisms that float in the ocean and form the base of the marine food web, feeding many other animals.",
    role:
      "They produce much of Earth’s oxygen and are the first step in the ocean food chain."
  }
];

export default function OceanAnimalsInteractive() {
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);


  return (
    <div className="p-6 bg-blue-100 min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-8 text-blue-900">
        🌊 Explore Ocean Animals! 🐠
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-center">
        {animals.map((animal, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card
                onClick={() => setSelectedAnimal(animal)}
                className="cursor-pointer transition-transform hover:scale-105"
              >
                <CardContent className="flex flex-col items-center p-4">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="h-24 mb-3"
                  />
                  <h2 className="text-lg font-semibold text-blue-800">
                    {animal.name}
                  </h2>
                </CardContent>
              </Card>
            </DialogTrigger>
            <DialogContent className="text-left">
              <h2 className="text-xl font-bold mb-2 text-blue-900">
                {selectedAnimal?.name}
              </h2>
              <p className="mb-2">{selectedAnimal?.description}</p>
              <p className="italic text-sm text-blue-700">
                Ecosystem Role: {selectedAnimal?.role}
              </p>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}

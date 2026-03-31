/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/Menu";
import Story from "./components/Story";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <MenuSection />
        <Reservations />
      </main>
      <Footer />
    </div>
  );
}

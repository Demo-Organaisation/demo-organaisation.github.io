import { useDemo } from "../context/DemoContext";

export default function Index() {
  const { demo } = useDemo();

  return (
    <div style={{ padding: "30px", width: "100%", maxWidth: "900px" }}>
      <h1>Welcome back, {demo.account.username}</h1>

      <section style={{ marginTop: "20px" }}>
        <h2>Account</h2>
        <p><strong>Username:</strong> {demo.account.username}</p>
        <p><strong>Email Enabled:</strong> {demo.account.useEmail ? "Yes" : "No"}</p>
        {demo.account.useEmail && (
          <p><strong>Email:</strong> {demo.account.email}</p>
        )}
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Emotions</h2>
        <p>Happiness: {demo.emotions.happiness}</p>
        <p>Guilt: {demo.emotions.guilt}</p>
        <p>Stress: {demo.emotions.stress}</p>
        <p>Energy: {demo.emotions.energy}</p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Behavior</h2>
        <p>Streaming: {demo.behavior.streaming ? "Yes" : "No"}</p>
        <p>Playing Games: {demo.behavior.playingGames ? "Yes" : "No"}</p>
        <p>Sleeping: {demo.behavior.sleeping ? "Yes" : "No"}</p>
        <p>Active App: {demo.behavior.activeApp}</p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Inventory</h2>
        <p>Gems: {demo.inventory.gems}</p>
        <p>Items: {demo.inventory.items.length > 0 ? demo.inventory.items.join(", ") : "None"}</p>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Settings</h2>
        <p>Theme: {demo.settings.theme}</p>
        <p>Notifications: {demo.settings.notifications ? "On" : "Off"}</p>
      </section>

      <section style={{ marginTop: "40px" }}>
        <h2>Demo OS Apps</h2>
        <ul>
          <li>Desktop</li>
          <li>TV</li>
          <li>Camera</li>
          <li>Shop</li>
          <li>Settings</li>
        </ul>
      </section>
    </div>
  );
}

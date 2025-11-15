import { Profile } from "./profile";

export function App() {
  return (
    <div>
      <h1>Task Management</h1>
      <Profile
        imageUrl="https://unsplash.com/photos/bald-man-in-sunglasses-dancing-in-studio-SQ5SFrjoXy4"
        name="Karsten Winegeart"
      />
      <Profile
        imageUrl="https://unsplash.com/photos/woman-reading-a-book-in-a-modern-armchair-4dLKoASYgIk"
        name="Caroline Badran"
      />
    </div>
  );
}

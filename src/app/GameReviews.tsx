import { useState } from "react";
import { Form } from "./Form";
import { SubmittedReviews } from "./SubmittedReviews";
import { Header } from "./Header";

type Review = {
  name: string;
  description: string;
  rating: string;
  image: string;
};

export default () => {
  // I used chatGPT for the useState for the first line of code here because of TypeScript
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newRating, setNewRating] = useState("");
  const [file, setFile] = useState("");

  const addReview = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reviewObject = {
      name: newName,
      description: newDescription,
      rating: newRating,
      image: file,
    };
    setReviews(reviews.concat(reviewObject));
    setNewName("");
    setNewDescription("");
    setNewRating("");
    setFile("");
  };

  const handleNameChange = (event: any) => {
    setNewName(event.target.value);
  };

  const handleDescriptionChange = (event: any) => {
    setNewDescription(event.target.value);
  };

  const handleRatingChange = (event: any) => {
    setNewRating(event.target.value);
  };

  const getFile = (event: any) => {
    if (event.target.files.length !== 0) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <>
      <div className="form-container">
        <Header text="Add Your Game Review" />
        <Form
          addReview={addReview}
          newName={newName}
          handleNameChange={handleNameChange}
          newDescription={newDescription}
          handleDescriptionChange={handleDescriptionChange}
          newRating={newRating}
          handleRatingChange={handleRatingChange}
          getFile={getFile}
        />
      </div>
      <SubmittedReviews reviewsList={reviews} />
    </>
  );
};

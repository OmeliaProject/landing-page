# Getting Started

First, change **#.env.local#** into **.env.local**:

```bash	
mv "#.env.local#" .env.local 

... 

./.env.local:
NEXT_PUBLIC_API_URL = "YOUR_API_URL"
NEXT_PUBLIC_API_KEY = "YOUR_API_KEY"
```

Second, run the development server:

```bash
npm install && npm run dev
# or
yarn install && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

</br>

# TOOLS

## useModal

```tsx
// file : yourComponent.tsx

//you can create any JSX.Element you want
import { YourModal } from "@components/YourModal"; 
import { useModal } from "@hooks/useModal";

export const YourComponent = () => {
  const { handleModal } = useModal();

  return (
    <>
      <div onClick={handleModal(() => <YourModal />);}>Open Modal</div>
        <div onClick={handleModal(() => <>Bonjour</>);}>This work</div>
    </>
  );
};

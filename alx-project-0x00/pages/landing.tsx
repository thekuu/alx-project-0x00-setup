import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <h1 className="text-2xl font-bold mb-4">Button Variants</h1>

      {/* Small Buttons */}
      <div className="space-x-2">
        <Button title="Small - sm" styles="text-sm rounded-sm" />
        <Button title="Small - md" styles="text-sm rounded-md" />
        <Button title="Small - full" styles="text-sm rounded-lg" />
      </div>

      {/* Medium Buttons */}
      <div className="space-x-2">
        <Button title="Medium - sm" styles="text-base rounded-sm" />
        <Button title="Medium - md" styles="text-base rounded-md" />
        <Button title="Medium - full" styles="text-base rounded-full" />
      </div>

      {/* Large Buttons */}
      <div className="space-x-2">
        <Button title="Large - sm" styles="text-lg rounded-sm" />
        <Button title="Large - md" styles="text-lg rounded-md" />
        <Button title="Large - full" styles="text-lg rounded-full" />
      </div>
        </div>
    )
}
export default Landing;
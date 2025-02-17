import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const AddProgram = () => {
  return (
    <div className="tw-bg-gray-100 tw-min-h-screen tw-w-full">
   
    <div className="tw-w-full tw-bg-white tw-shadow-md tw-px-4 tw-py-2 tw-flex tw-items-center">
  
      <h1 className="tw-text-l tw-font-bold">Manage Programs</h1>
     
      <p className="tw-text-gray-500 tw-ml-4">Home &gt; Manage Programs</p>
    </div>

      {/* White Container (90% of Parent) */}
      <div className="tw-w-[90%] tw-mt-4">
        <Card className="tw-w-full tw-bg-white tw-shadow-lg tw-rounded-md tw-px-8 tw-py-10">
          <form className="tw-w-full tw-space-y-6">
            {/* Program Name */}
            <div className="tw-space-y-2">
              <Label className="tw-font-medium">Program Name</Label>
              <Input type="text" placeholder="Enter program name" required className="tw-w-full tw-p-3 tw-border tw-rounded-md" />
            </div>

            {/* Create Program ID */}
            <div className="tw-space-y-2">
              <Label className="tw-font-medium">Create Program ID</Label>
              <Input type="text" placeholder="https://program.com" required className="tw-w-full tw-p-3 tw-border tw-rounded-md" />
            </div>

            {/* Description */}
            <div className="tw-space-y-2">
              <Label className="tw-font-medium ">Description (Optional)</Label>
              
                
                <Input type="text" placeholder="Yourname@gmail.com"  className="tw-w-full  tw-border tw-rounded-md tw-w-full tw-p-3  tw-min-h-[80px]" />
              
                
                
              
            </div>

            {/* Skills Gain */}
            <div className="tw-space-y-2">
              <Label className="tw-font-medium">Skills Gain</Label>
              <Input type="text" placeholder="Write skills" className="tw-w-full tw-p-3 tw-border tw-rounded-md" />
            </div>

            <div className="tw-space-y-2">
              <Label className="tw-font-medium">Program Duration (Optional)</Label>
              <select className="tw-w-full tw-p-3 tw-border tw-rounded-md">
                <option>Select</option>
                <option>1 Month</option>
                <option>3 Months</option>
                <option>6 Months</option>
              </select>
            </div>

           
            <div className="tw-flex tw-items-center tw-gap-6">
              <div className="tw-flex tw-items-center tw-gap-2">
                <Checkbox id="active" />
                <Label htmlFor="active">Active</Label>
              </div>
              <div className="tw-flex tw-items-center tw-gap-2">
                <Checkbox id="inactive" />
                <Label htmlFor="inactive">Inactive</Label>
              </div>
            </div>
            <Button type="submit" className=" tw-bg-blue-600 tw-text-white tw-font-semibold tw-py-3 tw-rounded-md hover:tw-bg-blue-700">
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AddProgram;

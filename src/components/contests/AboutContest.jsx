import { Calendar, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutContest = () => {
  return (
    <div className="w-full py-12 bg-white">
      {/* Header with Dates and CTA */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12 pb-8 border-b border-gray-200 px-10">
        {/* Date Info */}
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar className="w-5 h-5 text-[#D4A574]" />
            <span className="text-sm font-medium">Starts: 6/1/2024</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Clock className="w-5 h-5 text-[#D4A574]" />
            <span className="text-sm font-medium">Ends: 12/31/2024</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button className="bg-[#C4A24C] hover:bg-[#B39340] text-white px-6 py-2.5 rounded-md text-sm font-medium">
          Submit a Photo
        </Button>
      </div>
      <div className="container mx-auto px-6">
        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 justify-center items-center">
          {/* Left Column - Main Content */}
          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About the Contest
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur. Adipiscing vestibulum
                adipiscing erat imperdiet neque, ut venenatis mattis facilisi
                dapibus elementum. Accumsan elementum eget cursus amet elit
                sagittis ac at porta. Urna vitae fringilla risus condimentum
                commodo etiam id lobortis. Aenean dictumst luctus arcu mus
                consequat eretium. Pellentesque neque scelerisque leo at. Mattis
                enim in elementum in. Purus scelerisque dignissim etiam
                convallis enim pellentesque.
              </p>

              <p>
                Mattis risus at consequat aliquet molestie gravida. Eget lectus
                a viverra vestibulum. Sed et leo elementum magna odio malesuada.
                In maecenas duis ultrices habitant amet mi. Eu tellus nunc
                dictum in tortor in magna. Scelerisque sollicitudin ac risus
                nunc donec auctor amet elit. Vel sodales consectetur arcu tortor
                facilisis orci leo velit. At quam aliquam vel est lacced. Cras
                fermentum lobortis massa duis gravida at felis elit odio.
                Tristique nunc augue id quis et non eu. Sed at risus faucibus
                massa senectus sit tellus varius. Blandit placerat adipiscing
                suspendisse nec ut cursus enim eget. Nibh eget feugiat nibh id
                felis sed fermentum neque sed.
              </p>

              <p>
                Pellentesque pretium maecenas tincidunt lacinia viverra
                sollicitudin hendrerit. Mauris condimentum massa faucibus sit
                tellus tortor vestibulum odio. Sed nec libero nibh nec eget sem
                elit. Ac amet mattis quam id facilisi pulvinar eget. Consequat
                imperdiet sed aliquam accumsan. Eget eleifend ac auctor
                suspendisse vitae rutrum odio quieque.
              </p>

              <p>
                Sed semper non in non. Cursus est vel tortor arcu ut eget diam
                mi. Hendrerit eget non praesent porta purus nibh. Urna leo
                faucibus sed metus neque proin. Turpis sed nisl neque velit.
                Nunc tincidunt euismod amet. Elementum nielen in sed eget eu
                amet. Duis amet posuere et lobortis ultrices ultrices. In tortor
                enim interdum suspendisse pellentesque nunc a. Bibendum magna
                pellentesque vitas urna amet cras volutpat neque. Eget venenatis
                morbi volutpat vestibulum tellus facilisis. Non lectus cras amet
                enim. Duis molestie tempus eget.
              </p>
            </div>
          </div>

          {/* Right Column - Important Note */}
          <div className="md:col-span-1">
            <div className="bg-[#FFF9F0] border-l-4 border-[#D4A574] p-6 rounded-r-lg">
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-[#D4A574] flex-shrink-0 mt-0.5" />
                <h3 className="text-lg font-bold text-gray-900">
                  Important Note
                </h3>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur. Id cursus aliquet orci
                pharetra amet, llliqum facillis ipsum metus. Cursus lectus neque
                ornare quam a. Nulla venenatis habitasse et erat. Aliquam at
                nunc nunc sagittis condimentum phasellus id at. Arcu in urna
                mattis diam vestibulum consequat. Eget fermentum ut in at. .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContest;

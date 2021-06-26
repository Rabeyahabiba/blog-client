import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="data:image/webp;base64,UklGRuQOAABXRUJQVlA4INgOAADwggCdASodAbEAPtFgqFAoJT+tpRPL6/AaCU3N3ztM/5TeF/uR96B9K3CZDyP50R6Mk7pHC1wV+pZVhnWO+P77f957d2L/5ru4f2zOb/1+RamruymgI8t/8efD9+/+GoAdCcBmXcj4hvPbgr5nyiybTK4SIVGEfYgEPWl4i/SFvvtu+jAOoW/pHzKrYsvPiz+tqO+UxWH09UTP7OCP0uB49f02/+yP+gn+VRc+bhSB4Aaeh/cGM6WZpVLkg4MNCmOD/narTIfbGDfdse8sgxRi0VOmPgeubDwi990NBKiav1SvSayqTklvSfkVa6wAvrumIUIOv5a41bGzhnMYcu0kADUXllMX7CrQlnzHcjO+gvEnIXKcvnwhh8BKRosGw45sieuIVn/x8evYfvIfSIxkpNf8Z0Nz3M9jBf2KWha7q0lB9FXpuXBVYiFbxHhfF+IcFxjkvpVbvj5m5uj6SCYbkUEXMM+fUI4J2Df6iWsNp9Fq9ffsVkIJmB0nzHHIAcIxWpOgjEzCPOxVjDZYTVEVyvoe/Hlqr/407BqET0CjKOk593MEW3/oRCImGmXMqnVAtIICqlNEemvJmymfXcmy/NqLwJxKy/s3MqbZ3wVpWrKWv4oLMv93dSrnVvikkyQ+nO56WtFfhlMIL+F4nl3hPoUY/0NOXIrhmBk79qLKoeHo8rnpHdqnyypfB4WzDkoabpPeTcTlhKU+/DrBL/5kSdzgyY27xDjy0R9tv1rrA1tWQkML2KghAV+9cx2RULMh1F4W5yoYOh1bHODx4/U5Uwv6DJgxbmsl2Q+PDmlXm1pK9Cq54a4IhQ43vWWMdKzi4s6jhbcjmuSbKUashncFd/A+anPFxr4G7W6B1xgoEJTNHEhY19YOXjMynoXXQWD1ViHKVEBi7n1NTOev7dgL8OXgVOnW8hDJNBppFImAV7PaCnkQccrmdxjiMGQYW2sUqwByyaMvTaLjn8U7D741DEHZxEPAEV4r7yPXMKvA2/VvF7F2ztoWN8Mx+u5+QiaT0XjBh1pMzFPbN1V4HlDwvokk32MvwT7NHSnnUuxFKq0kCnHB/aY0Bo5a7f/l0N8VKcgZu5qQ8ifvzm+elJAKW2nCRRlUWzi8484ohzmPQEIFNEdhj76X1O39ag7SwrUyOop7ld/9GIHt++5OG8kg80T0jHohmIS1J63H7vI5gQR28MHvV2EBIRz3gA2qItTu7ZEXLv1/q6xMJQrwLaLEdYL96lJ/33OBJF5pP7k55ZIpXu8l5tKUTUBsMgk8vbf6UshFJ1ZqY4m/+4O7QYQSL0pxQcZ9t+QWDUaEKQ1bVeRTg9VIKewLvIvZZvtsISFI5NOPHu+feJqMzf+oJjo0ZXieZ2dASepPiqsTXpwv7TJpB55KmLkxmC7c2dcjXAAA/vkTHI9MLh+YecX+DcSHxxLP9LUAk5F84TjI194PMU4JGeZ+ajfz//mxtNGAZbBYeMIXYbznSTFtm1WoQTACfOAGwEVHOTWbSYB2OBtL493nJRrbWvoP/DGpDXGQptiBIOTixIIoIU2F5WHBRkKpxBlfz6doaORJQhvmD9PIhimFAtQ0VG1RMkyRLMJStMHiAnfUo91zBjxHAuDqCn0l5qS6ktK4o+Z4lDFTjX0oyYNgaUM0DzHgptnPz6WWJNiUNnVNTfQAMWks9UP4QvjSkYgqfMjQkyYJTHl5hpBB/fOHACdWuOU/kJlI+xRo0Q01+GQvhGGGPeghpe3iPrX4PbP53S795wQVgKvPcPTrn5mMbRKsf9srz7Ir0/kL57S1o329YevBLU/cxhRKBZQVyRe1i5t7r2svoML0HMvFCEsIaqo4ENb1WQZpNxhwFYafFnR9TBCSizIlIipSRiljFx18rnJObzVmWQIxSkoOwZWN8uozpDOQLnIwvapKtixU8KHkBm++ma7g1CI+4VRPzPTsIC2EmNjsyjNxI+u6/gGpHF4s0oWE6YCeAoqQQuEpbx/SlBijaZ90aimQhosd7fGNneAcc0YOUbWUpVTOBPCuJSG4clhXA4Olbp+AqZgZsS8xXqEvAvk1ee8AgP3A0J87mztnKbBHG3AW9lqQCkDzJNPuwP6lJ1yw5/tb6oCDHu+AtR+G08Uzt52hbk1H9JHA415610k6K5yZH3Tvi+61bq1dEsN3N4sxhY5c6aDe8agc5VUl3oSadx4M6941JUt1xy5S8n0QC/t55D6/SDwjAB/zZ9R2xEkTftTRu+Pa3X41Gi9KVYQ/JTv3JfamYfaQBMCrWJ2id4pFLJyoieHM7QaLMuQ08dOjGMS7xFo2UgZpBghr7S733mjLhGdOJc/Dgn3bbG6VUAKGwEIc5MN5Ngblq9I2uJCBTyPIMzXdqb3228fW1FCFn9rfYWfBuHlf8bIvLa2E2pgE6VzQArj5TSsHCFxhZ+roahJoHIhkXiOozH0jTI1YnR7FhSQyo7viNFt5CHGKj1bK+QZJ6x3OjxKkHaWrmQLfVYiIRVW0yKJ0AAzd1B1eoT4kz62RFmGLV0sqhbtrRgLcXJtGlNRbdC+4t1n5AFHnpf4TOY5XtEcl6joZLQ0eg1EX3Tfj+6c9e1NQK9agMmZZ3k86K68EPDdB542+EsCVHDr+T+pcoxBl6nhyWzVBrz6oqFb3dZcJW1UAPoNwwbsHVUjwZhEQ/be32L/3t+4CNZho6zQdPwxVzXK0gkqg6md629NfbLJTMec1HrRGFA6X3APF7Tmn2D2tkJRG6ghScnETSTAHIG4MJjN3nkzpY7ZPLsPt3AniEyJFQhtTnh354mcM/qAayUYRtpYgiqFz5VvEL2MFUuN4DYDdeOJomm+6NqAdQo0uAXYa1PVdyBPlUSrgzot4eCI+Y3sl1rRo1bTPMpiSevHhiTZTJPNpEwAAlLRLfiR/8+6s4yxt7pS4gnlMLEyiGjWZQ45HfbH1LGPHlHvarLguE2LqavDqiKw2vzqA5tcimeuqQa0cxQQvqekMk05moee+FB2eP1+sqleugIcwzoYmfCTSUIq7naKjbjQ0W/mi07NFH5WTSMYmiOejS4hfQvzL6JGWwwFz4/2PHzOfxYS4AkKMh0VtnN/QCLOFKmNEo34pBCA8UVGYQNV2n8Bh0rQWADVOcuMNCRvYRW/0n888dCLrPhsqFC18rfaefu7hT1atvdJ5sTDl6bDzRX/q/iTaWr8gs3ASZtxuMW6RtW1lG2VYLSfvrrAw5JAtOixePMsZFpffsElaQdUDzG1QxppiIVk/zsLvazxE5upjfzV2COL/bl/RUuMfEjPLwJSRS0AKIH81H30mU1iCHUD0JKnoJyQ7YQfol0oWXRGhfKXYMlb0LGZENGc8SocWAYTDCPiY36+yBGhF6a/dEDS1hQz5wh4kHbLWgxpeg6jpTDAalyOEb10BU3P2CCQPRyZmiX5bqKg+XkUxM5sxkhKDX8wiJc0Hj35qqxEPxF9YC9yIypIdAiSD6jNr9PxincqV0dafZ9qCUDJgBZB93IX2Nd1E4WIgYZyjXpUrD/MLlNtWg3ztJ0TdZhkCPQ0Yc7CavEBnmDckVwlVC6tRpSasvWwPoOgTW8Gkoy8agf7a1QYQTFrU8ZY+BIil5uCIx/rqQI0VzLnIg6KMfXYobKS7L26msY1f+5LLFCdkCbYmAlyJH0WeiYCCPFLE3yZSmVM/vnFNSdpwGm4lvOp5xU3hA2UyqQppJ2MRZm7BgCw3lQhvdYow3GqzU56cWoHUF3zXY+ddnD+7c6tq0oax9LO3XHpoqHRXmHZBJJ1vYr/TfyD5VSDDSLKKu8IZfSPyO8vQ3uN0vXu0q+pPRvDg/WfpIlyZcZOr9dtmPCnYSGNDt1Zz9PBm0KkCnj/lHWAjb4xl3Crpbdf0xmZxVRTpqiZeMba3m/+Q+OJNb/+/tIo+nYYfovbSc3xRoT1EXuLUSmeCuxA+fHuNAJgvFASXFC9XTSUx8+8HOUyiFmB19hjjyrGETtasR+HcYP9BxBKJ+7vfpj69jwdI7xY9+hQo1xRkJrC/va4wlgGo0zss+oZko+iHi1WaAzf+v6w4OOA69sE0GOXV5TuCNeWS3BHu/maNI6oJlQKTjaaVOUc56/MZ3RGoQDVMWENTCTH/LB2VyESqN6pVIIDOPaF/PgRFHlPwBoyPvZ0JFke1gWYU9LqbhEwrxwWRkzaj0SjpQc2C4rkpTcaLJ4isd+/w4rHi3es5PdM7Incs23cLsTPQmzwduNThbtnmt6ORWdpVxFy4COgeqAaaOlK63c2wQA3Ru4evgTUXI4JCS8+8s3kBpjaWaD+PjcZueh4Y4mQat+76uE6vIShlNtWfXSny2EYyfIQGglYSTMnnCsFRltOzTiOypTE88b5qkvWv0aMQ197ZtjCVQvhNAQQiq5mmjjyg3H0/YZmp+TRFLZwFDdVOJmYtlFaDVRvaLNzYDFZMMcFi8m3ZrZiOaBrkrFhN4DJx/hbKcsskf/dJQWGI8T6ntKpDhB9bXgJHWbENADiNeGpJchjmFlAnA6Ug2bSToh5ba7aOiSDKf1c5UJMmvxx+IDe5Z9/U2X//hiPAbHDGQZ5FsFOV2mlIJpFRXU/8wN6VFfE3A9tzfg2e1pVur2B85M4HGOTtShZlJ4HLiPQDzCUJtiojo4dYnMpW1uJ1l/ubGXrDqKP7XSGcuq0mti3sjkGB/p39S4OltOS2kzt/89Lgm5C5LCXsL6zlVAc6V+k+iUdB7HJbkJyM+cCNONxmMoGGq4/ksSmXxdnKa6KZacBHdXDpMk/c/B4uwmIe8e2KP4PuA3hkvbIwWT+VdPOEv5x2+tAcYad820VhpaqKlJ6qRC9/ervfgjqCK5b6lSKkSTXrr4lLMAeTdFkBZCiiURFVQz1NU1Ni0XCFU66MhzMehJO2B8/gMnYFBk07SAou9DgJ8aaTRoRKFBmDyzflV4oiCyH1+vg1y6Ym9cfPgZ5pVCxKmbgrL+ONtf3I8IEQJnsdne+oCo7utbGnGBibeMnMivpw1AW4WZCBll4Ka2k0JuuIZRpw0AQmXjH39IFd7PPEMR1Qmg0ME8E59qqsAmU26IqZ6hLwAA=="
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="name" name="name" />
          <label>Email</label>
          <input type="email" placeholder="hema@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

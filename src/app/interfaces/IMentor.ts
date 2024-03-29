import {IMentorCard} from "./IMentorCard";
import {IJob} from "./IJob";
import {IEducation} from "./IEducation";
import {IPost} from "./IPost";
import {ISolution} from "./ISolution";
import {IProject} from "./IProject";
import {IReviews} from "./IReview";

export interface IMentor extends IMentorCard {
  readonly discounts: {
    readonly fiveSessionRate: number;
    readonly tenSessionRate: number;
  },
  readonly solutions?: ISolution[];
  readonly jobs?: IJob[];
  readonly projects?: IProject[];
  readonly education?: IEducation[];
  readonly posts?: IPost[];
  readonly reviewBoard?: IReviews | null;
  readonly fullyBooked?: boolean;
  }

import { Typography } from "@mui/material";
import { Volume } from "../../../../shared/model/Volume";
import {
  BookSkeleton,
  CustomCard,
  CustomCardContent,
  Separator,
  Thumb,
} from "./styles";

export interface BooksProps {
  items: Volume[];
  loading: boolean;
}

export default function Books({ items, loading }: BooksProps) {
  return (
    <>
      {loading && (
        <>
          <CustomCard>
            <CustomCardContent>
              <BookSkeleton variant="rectangular" />
              <BookSkeleton variant="rectangular" />
              <BookSkeleton variant="rectangular" />
              <Separator />
            </CustomCardContent>
          </CustomCard>
          <CustomCard>
            <CustomCardContent>
              <BookSkeleton variant="rectangular" />
              <BookSkeleton variant="rectangular" />
              <BookSkeleton variant="rectangular" />
              <Separator />
            </CustomCardContent>
          </CustomCard>
          <CustomCard>
            <CustomCardContent>
              <BookSkeleton variant="rectangular" />
              <BookSkeleton variant="rectangular" />
              <BookSkeleton variant="rectangular" />
              <Separator />
            </CustomCardContent>
          </CustomCard>
          <CustomCard>
            <CustomCardContent>
              <BookSkeleton variant="rectangular" />
              <BookSkeleton variant="rectangular" />
              <BookSkeleton variant="rectangular" />
              <Separator />
            </CustomCardContent>
          </CustomCard>
        </>
      )}
      {!loading &&
        items.map((i, index) => (
          <CustomCard key={index}>
            <CustomCardContent>
              {i.imageLink && (
                <Thumb src={i.imageLink} sx={{ width: 56, height: 56 }} />
              )}
              <Typography variant="h6" component="div">
                {i.title}
              </Typography>
              <Typography
                sx={{ fontSize: 13 }}
                color="text.secondary"
                gutterBottom
              >
                {i.pages} pages&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;{i.year}
                &nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;{i.publisher}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {i.description}
              </Typography>
              <Separator />
            </CustomCardContent>
          </CustomCard>
        ))}
    </>
  );
}

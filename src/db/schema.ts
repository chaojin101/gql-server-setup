import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const user = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  hashedPassword: text("hashed_password").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const userRelations = relations(user, ({ many }) => ({
  galleries: many(gallery),
  collections: many(collection),
}));

export const gallery = pgTable("gallery", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const galleryRelations = relations(gallery, ({ one, many }) => ({
  user: one(user, {
    fields: [gallery.userId],
    references: [user.id],
  }),
  imgs: many(img),
  galleryTags: many(galleryGalleryTag),
}));

export const img = pgTable(
  "img",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    url: text("url").notNull(),
    galleryId: uuid("gallery_id")
      .notNull()
      .references(() => gallery.id),
    order: integer("order").notNull(), // position in the gallery
  },
  (table) => ({}),
);
export type Img = typeof img.$inferSelect;

export const imgRelations = relations(img, ({ one, many }) => ({
  gallery: one(gallery, {
    fields: [img.galleryId],
    references: [gallery.id],
  }),
  collectionImgs: many(collectionImg),
}));

export const galleryTag = pgTable("tag", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().unique(),
});

export const galleryTagRelations = relations(galleryTag, ({ many }) => ({
  galleryGalleryTags: many(galleryGalleryTag),
}));

export const galleryGalleryTag = pgTable(
  "gallery_gallery_tag",
  {
    galleryId: uuid("gallery_id")
      .notNull()
      .references(() => gallery.id),
    tagId: uuid("tag_id")
      .notNull()
      .references(() => galleryTag.id),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.galleryId, table.tagId] }),
  }),
);

export const galleryGalleryTagRelations = relations(
  galleryGalleryTag,
  ({ one, many }) => ({
    gallery: one(gallery, {
      fields: [galleryGalleryTag.galleryId],
      references: [gallery.id],
    }),
    galleryTag: one(galleryTag, {
      fields: [galleryGalleryTag.tagId],
      references: [galleryTag.id],
    }),
  }),
);

export const collection = pgTable("collection", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const collectionRelations = relations(collection, ({ one, many }) => ({
  user: one(user, {
    fields: [collection.userId],
    references: [user.id],
  }),
}));

export const collectionImg = pgTable(
  "collection_img",
  {
    collectionId: uuid("collection_id")
      .notNull()
      .references(() => collection.id),
    imgId: uuid("img_id")
      .notNull()
      .references(() => img.id),
    order: integer("order").notNull(), // position in the collection
  },
  (table) => ({
    pk: primaryKey({ columns: [table.collectionId, table.imgId] }),
  }),
);

export const collectionImgRelations = relations(
  collectionImg,
  ({ one, many }) => ({
    collection: one(collection, {
      fields: [collectionImg.collectionId],
      references: [collection.id],
    }),
    img: one(img, {
      fields: [collectionImg.imgId],
      references: [img.id],
    }),
  }),
);
